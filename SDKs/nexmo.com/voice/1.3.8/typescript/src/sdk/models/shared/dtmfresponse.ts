import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DtmfResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}
