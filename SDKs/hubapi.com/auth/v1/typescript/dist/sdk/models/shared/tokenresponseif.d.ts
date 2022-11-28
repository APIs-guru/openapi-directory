import { SpeakeasyBase } from "../../../internal/utils";
export declare class TokenResponseIf extends SpeakeasyBase {
    accessToken: string;
    expiresIn: number;
    idToken?: string;
    refreshToken: string;
    tokenType: string;
}
