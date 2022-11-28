import { SpeakeasyBase } from "../../../internal/utils";
import { Parameter } from "./parameter";
export declare class Client extends SpeakeasyBase {
    accountId?: string;
    clientId?: string;
    containerId?: string;
    fingerprint?: string;
    name?: string;
    notes?: string;
    parameter?: Parameter[];
    parentFolderId?: string;
    path?: string;
    priority?: number;
    tagManagerUrl?: string;
    type?: string;
    workspaceId?: string;
}
