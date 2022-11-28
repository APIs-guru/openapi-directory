import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProductModuleRequestBodyLicenseTemplateEnum {
    Timevolume = "TIMEVOLUME",
    Feature = "FEATURE"
}
export declare enum CreateProductModuleRequestBodyNodeSecretModeEnum {
    Predefined = "PREDEFINED",
    Client = "CLIENT"
}
export declare class CreateProductModuleRequestBody extends SpeakeasyBase {
    active: boolean;
    licenseTemplate?: CreateProductModuleRequestBodyLicenseTemplateEnum[];
    licensingModel: string;
    maxCheckoutValidity?: number;
    name: string;
    nodeSecretMode?: CreateProductModuleRequestBodyNodeSecretModeEnum[];
    number?: string;
    productNumber: string;
    redThreshold?: number;
    yellowThreshold?: number;
}
export declare class CreateProductModuleSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateProductModuleRequest extends SpeakeasyBase {
    request: CreateProductModuleRequestBody;
    security: CreateProductModuleSecurity;
}
export declare class CreateProductModuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
