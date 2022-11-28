import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProjectsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetProjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetProjectsHeaders;
}


export class GetProjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Project })
  projects?: shared.Project[];

  @SpeakeasyMetadata()
  statusCode: number;
}
