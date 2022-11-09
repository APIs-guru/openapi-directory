export declare const ppMetadataKey = "pathParam";
export declare function GetSimplePathParams(paramName: string, paramValue: any, explode: boolean): Map<string, string>;
export declare class ParamDecorator {
    Style: string;
    Explode: boolean;
    ParamName: string;
    Serialization?: string;
    constructor(Style: string, Explode: boolean, ParamName: string, Serialization?: string);
}
