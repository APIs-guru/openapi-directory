import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRequest extends SpeakeasyBase {
    request: shared.RealmRepresentation;
}
export declare class PostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
