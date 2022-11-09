import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetImageRegionProposalsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=imageId" })
  imageId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=projectId" })
  projectId: string;
}


export class GetImageRegionProposalsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetImageRegionProposalsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetImageRegionProposalsPathParams;

  @Metadata()
  headers: GetImageRegionProposalsHeaders;
}


export class GetImageRegionProposalsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  imageRegionProposal?: shared.ImageRegionProposal;

  @Metadata()
  statusCode: number;
}
