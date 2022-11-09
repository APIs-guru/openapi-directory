import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  hat?: any;

  @Metadata()
  textError?: string;
}
