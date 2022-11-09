import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class AccessTokenInfoResponse extends SpeakeasyBase {
    appId: number;
    expiresIn: number;
    hubDomain?: string;
    hubId: number;
    scopeToScopeGroupPks: number[];
    scopes: string[];
    token: string;
    tokenType: string;
    trialScopeToScopeGroupPks: number[];
    trialScopes: string[];
    user?: string;
    userId: number;
}
