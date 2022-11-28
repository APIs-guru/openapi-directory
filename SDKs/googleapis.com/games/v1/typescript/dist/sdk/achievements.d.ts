import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Achievements {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * gamesAchievementsIncrement - Increments the steps of the achievement with the given ID for the currently authenticated player.
    **/
    gamesAchievementsIncrement(req: operations.GamesAchievementsIncrementRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsIncrementResponse>;
    /**
     * gamesAchievementsList - Lists the progress for all your application's achievements for the currently authenticated player.
    **/
    gamesAchievementsList(req: operations.GamesAchievementsListRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsListResponse>;
    /**
     * gamesAchievementsReveal - Sets the state of the achievement with the given ID to `REVEALED` for the currently authenticated player.
    **/
    gamesAchievementsReveal(req: operations.GamesAchievementsRevealRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsRevealResponse>;
    /**
     * gamesAchievementsSetStepsAtLeast - Sets the steps for the currently authenticated player towards unlocking an achievement. If the steps parameter is less than the current number of steps that the player already gained for the achievement, the achievement is not modified.
    **/
    gamesAchievementsSetStepsAtLeast(req: operations.GamesAchievementsSetStepsAtLeastRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsSetStepsAtLeastResponse>;
    /**
     * gamesAchievementsUnlock - Unlocks this achievement for the currently authenticated player.
    **/
    gamesAchievementsUnlock(req: operations.GamesAchievementsUnlockRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsUnlockResponse>;
    /**
     * gamesAchievementsUpdateMultiple - Updates multiple achievements for the currently authenticated player.
    **/
    gamesAchievementsUpdateMultiple(req: operations.GamesAchievementsUpdateMultipleRequest, config?: AxiosRequestConfig): Promise<operations.GamesAchievementsUpdateMultipleResponse>;
}
