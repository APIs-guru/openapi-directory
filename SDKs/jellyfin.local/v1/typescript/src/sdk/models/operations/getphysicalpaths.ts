import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPhysicalPathsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetPhysicalPathsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetPhysicalPathsSecurity;
}


export class GetPhysicalPathsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getPhysicalPaths200ApplicationJsonStrings?: string[];

  @SpeakeasyMetadata()
  statusCode: number;
}
