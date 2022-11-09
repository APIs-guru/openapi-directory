import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPhysicalPathsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPhysicalPathsRequest extends SpeakeasyBase {
  @Metadata()
  security: GetPhysicalPathsSecurity;
}


export class GetPhysicalPathsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getPhysicalPaths200ApplicationJsonStrings?: string[];

  @Metadata()
  statusCode: number;
}
