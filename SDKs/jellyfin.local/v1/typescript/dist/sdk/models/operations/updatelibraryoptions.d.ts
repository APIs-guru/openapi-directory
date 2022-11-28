import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLibraryOptionsRequests extends SpeakeasyBase {
    updateLibraryOptionsDto?: shared.UpdateLibraryOptionsDto;
    updateLibraryOptionsDto1?: shared.UpdateLibraryOptionsDto;
    updateLibraryOptionsDto2?: shared.UpdateLibraryOptionsDto;
}
export declare class UpdateLibraryOptionsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class UpdateLibraryOptionsRequest extends SpeakeasyBase {
    request?: UpdateLibraryOptionsRequests;
    security: UpdateLibraryOptionsSecurity;
}
export declare class UpdateLibraryOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
