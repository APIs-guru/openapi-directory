import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ResourcesTimezonesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemTimezoneViewModel?: shared.SystemTimezoneViewModel;
}
