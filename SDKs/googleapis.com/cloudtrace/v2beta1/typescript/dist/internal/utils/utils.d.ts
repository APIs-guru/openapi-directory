import "reflect-metadata";
import { ParamDecorator } from "./pathparams";
export declare class SpeakeasyBase {
    constructor(payload?: Record<string | symbol, unknown>);
}
export declare function SpeakeasyMetadata<T extends SpeakeasyBase = Record<string | symbol, unknown>>(params?: {
    data?: string;
    elemType?: {
        new (): T;
    };
    elemDepth?: number;
}): PropertyDecorator;
export declare function ReplaceParameters(stringWithParams: string, params: Map<string, string>): string;
export declare function GenerateURL(serverURL: string, path: string, pathParams: any): string;
export declare function ParseParamDecorator(ann: string, fName: string, defaultStyle: string, defaultExplode: boolean): ParamDecorator;
