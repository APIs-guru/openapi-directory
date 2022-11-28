import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUpdatedMediaRequests extends SpeakeasyBase {
    mediaUpdateInfoDtos?: shared.MediaUpdateInfoDto[];
    mediaUpdateInfoDtos1?: shared.MediaUpdateInfoDto[];
    mediaUpdateInfoDtos2?: shared.MediaUpdateInfoDto[];
}
export declare class PostUpdatedMediaSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class PostUpdatedMediaRequest extends SpeakeasyBase {
    request: PostUpdatedMediaRequests;
    security: PostUpdatedMediaSecurity;
}
export declare class PostUpdatedMediaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
