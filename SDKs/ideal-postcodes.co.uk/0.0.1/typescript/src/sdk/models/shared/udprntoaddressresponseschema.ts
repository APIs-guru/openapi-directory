import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";


export class UdprnToAddressResponseSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=result" })
  result?: Address;
}
