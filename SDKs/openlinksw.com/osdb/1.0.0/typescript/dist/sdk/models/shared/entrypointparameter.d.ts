import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EntryPointParameterTypeEnum {
    Query = "query",
    Header = "header",
    Uri = "uri",
    Path = "path",
    Body = "body"
}
export declare class EntryPointParameter extends SpeakeasyBase {
    description: string;
    displayName: string;
    parameterName: string;
    permittedValues: string[];
    required: number;
    type: EntryPointParameterTypeEnum;
}
