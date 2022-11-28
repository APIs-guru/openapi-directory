import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImageRegionProposalsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=imageId" })
  imageId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetImageRegionProposalsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetImageRegionProposalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImageRegionProposalsPathParams;

  @SpeakeasyMetadata()
  headers: GetImageRegionProposalsHeaders;
}


export class GetImageRegionProposalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageRegionProposal?: shared.ImageRegionProposal;

  @SpeakeasyMetadata()
  statusCode: number;
}
