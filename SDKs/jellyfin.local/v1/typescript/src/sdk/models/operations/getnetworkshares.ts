import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetNetworkSharesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  customAuthentication: shared.SchemeCustomAuthentication;
}


export class GetNetworkSharesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetNetworkSharesSecurity;
}


export class GetNetworkSharesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.FileSystemEntryInfo })
  fileSystemEntryInfos?: shared.FileSystemEntryInfo[];

  @SpeakeasyMetadata()
  statusCode: number;
}
