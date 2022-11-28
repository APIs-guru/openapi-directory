import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSpotByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSpotByIdRequest extends SpeakeasyBase {
    pathParams: GetSpotByIdPathParams;
}
export declare class GetSpotByIdResponse extends SpeakeasyBase {
    contentType: string;
    spotGet?: shared.SpotGet;
    statusCode: number;
}
