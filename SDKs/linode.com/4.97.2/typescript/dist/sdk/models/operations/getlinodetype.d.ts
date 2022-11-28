import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLinodeTypePathParams extends SpeakeasyBase {
    typeId: string;
}
export declare class GetLinodeTypeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLinodeTypeRequest extends SpeakeasyBase {
    pathParams: GetLinodeTypePathParams;
}
export declare class GetLinodeTypeResponse extends SpeakeasyBase {
    contentType: string;
    linodeType?: shared.LinodeType;
    statusCode: number;
    getLinodeTypeDefaultApplicationJsonObject?: GetLinodeTypeDefaultApplicationJson;
}
