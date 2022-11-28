import { SpeakeasyBase } from "../../../internal/utils";
import { EntryPointParameter } from "./entrypointparameter";
export declare enum EntryPointHttpMethodEnum {
    Get = "GET",
    Put = "PUT",
    Post = "POST",
    Delete = "DELETE"
}
export declare class EntryPoint extends SpeakeasyBase {
    contentTypes: string[];
    description: string;
    encodingTypes: string[];
    httpMethod: EntryPointHttpMethodEnum;
    name: string;
    parameters: EntryPointParameter[];
    url: string;
    urlTemplate: string;
}
