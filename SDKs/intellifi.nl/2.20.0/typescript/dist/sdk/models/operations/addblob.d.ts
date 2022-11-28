import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddBlobRequest extends SpeakeasyBase {
    request: shared.BlobInput;
}
export declare class AddBlobResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
