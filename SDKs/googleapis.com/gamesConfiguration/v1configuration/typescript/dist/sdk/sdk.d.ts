import { AxiosInstance } from "axios";
import { AchievementConfigurations } from "./achievementconfigurations";
import { ImageConfigurations } from "./imageconfigurations";
import { LeaderboardConfigurations } from "./leaderboardconfigurations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://gamesconfiguration.googleapis.com/"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    achievementConfigurations: AchievementConfigurations;
    imageConfigurations: ImageConfigurations;
    leaderboardConfigurations: LeaderboardConfigurations;
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
}
export {};
