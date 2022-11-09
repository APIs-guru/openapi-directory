import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResponseHeader } from "./responseheader";
import { ManagedZone } from "./managedzone";


export class ManagedZonesListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=managedZones", elemType: shared.ManagedZone })
  managedZones?: ManagedZone[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
