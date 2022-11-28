import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetImageRegionProposalsPathParams extends SpeakeasyBase {
    imageId: string;
    projectId: string;
}
export declare class GetImageRegionProposalsHeaders extends SpeakeasyBase {
    trainingKey: string;
}
export declare class GetImageRegionProposalsRequest extends SpeakeasyBase {
    pathParams: GetImageRegionProposalsPathParams;
    headers: GetImageRegionProposalsHeaders;
}
export declare class GetImageRegionProposalsResponse extends SpeakeasyBase {
    contentType: string;
    imageRegionProposal?: shared.ImageRegionProposal;
    statusCode: number;
}
