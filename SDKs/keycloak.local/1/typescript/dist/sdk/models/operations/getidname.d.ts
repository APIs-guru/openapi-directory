import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetIdNamePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetIdNameRequest extends SpeakeasyBase {
    pathParams: GetIdNamePathParams;
}
export declare class GetIdNameResponse extends SpeakeasyBase {
    contentType: string;
    getIdName2XxApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
