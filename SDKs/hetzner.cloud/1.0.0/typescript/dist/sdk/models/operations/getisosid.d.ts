import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetIsosIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum GetIsosId200ApplicationJsonIsoTypeEnum {
    Public = "public",
    Private = "private"
}
export declare class GetIsosId200ApplicationJsonIso extends SpeakeasyBase {
    deprecated: string;
    description: string;
    id: number;
    name: string;
    type: GetIsosId200ApplicationJsonIsoTypeEnum;
}
export declare class GetIsosId200ApplicationJson extends SpeakeasyBase {
    iso: GetIsosId200ApplicationJsonIso;
}
export declare class GetIsosIdRequest extends SpeakeasyBase {
    pathParams: GetIsosIdPathParams;
}
export declare class GetIsosIdResponse extends SpeakeasyBase {
    contentType: string;
    getIsosId200ApplicationJsonObject?: GetIsosId200ApplicationJson;
    statusCode: number;
}
