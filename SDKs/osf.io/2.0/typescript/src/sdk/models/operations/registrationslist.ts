import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistrationsListResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
