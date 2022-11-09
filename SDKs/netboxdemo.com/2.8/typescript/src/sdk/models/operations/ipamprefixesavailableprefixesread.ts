import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamPrefixesAvailablePrefixesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesAvailablePrefixesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamPrefixesAvailablePrefixesReadPathParams;
}


export class IpamPrefixesAvailablePrefixesReadResponse extends SpeakeasyBase {
  @Metadata({ elemType: shared.AvailablePrefix })
  availablePrefixes?: shared.AvailablePrefix[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
