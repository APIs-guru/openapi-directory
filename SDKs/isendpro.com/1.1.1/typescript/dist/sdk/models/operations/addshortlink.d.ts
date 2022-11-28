import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddShortlinkRequest extends SpeakeasyBase {
    request: shared.ShortlinkRequest;
}
export declare class AddShortlinkResponse extends SpeakeasyBase {
    contentType: string;
    erreur?: shared.Erreur;
    shortlinkResponse?: shared.ShortlinkResponse;
    statusCode: number;
}
