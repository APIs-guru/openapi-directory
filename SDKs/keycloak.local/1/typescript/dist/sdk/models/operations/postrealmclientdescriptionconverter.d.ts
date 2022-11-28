import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmClientDescriptionConverterPathParams extends SpeakeasyBase {
    realm: string;
}
export declare class PostRealmClientDescriptionConverterRequest extends SpeakeasyBase {
    pathParams: PostRealmClientDescriptionConverterPathParams;
    request: string;
}
export declare class PostRealmClientDescriptionConverterResponse extends SpeakeasyBase {
    clientRepresentation?: shared.ClientRepresentation;
    contentType: string;
    statusCode: number;
}
