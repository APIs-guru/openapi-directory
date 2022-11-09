import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class HatOffResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  textError?: string;
}
