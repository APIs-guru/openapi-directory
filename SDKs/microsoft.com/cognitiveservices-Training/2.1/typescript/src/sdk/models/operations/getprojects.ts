import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetProjectsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetProjectsHeaders;
}


export class GetProjectsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Project })
  projects?: shared.Project[];

  @Metadata()
  statusCode: number;
}
