import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeTypes200ApplicationJson extends SpeakeasyBase {
    data?: shared.LinodeType[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetLinodeTypesDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getLinodeTypes200ApplicationJsonObject?: GetLinodeTypes200ApplicationJson;
    getLinodeTypesDefaultApplicationJsonObject?: GetLinodeTypesDefaultApplicationJson;
}
