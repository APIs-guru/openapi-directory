import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLinodeInstanceRequestBody extends SpeakeasyBase {
    authorizedKeys?: string[];
    authorizedUsers?: string[];
    backupId?: number;
    backupsEnabled?: boolean;
    booted?: boolean;
    group?: string;
    image?: string;
    interfaces?: shared.LinodeConfigInterface[];
    label?: string;
    privateIp?: boolean;
    region: string;
    rootPass?: string;
    stackscriptData?: Map<string, any>;
    stackscriptId?: number;
    swapSize?: number;
    tags?: string[];
    type: string;
}
export declare class CreateLinodeInstanceSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateLinodeInstanceRequest extends SpeakeasyBase {
    request: CreateLinodeInstanceRequestBody;
    security: CreateLinodeInstanceSecurity;
}
export declare class CreateLinodeInstanceResponse extends SpeakeasyBase {
    contentType: string;
    linode?: shared.Linode;
    statusCode: number;
    createLinodeInstanceDefaultApplicationJsonObject?: CreateLinodeInstanceDefaultApplicationJson;
}
