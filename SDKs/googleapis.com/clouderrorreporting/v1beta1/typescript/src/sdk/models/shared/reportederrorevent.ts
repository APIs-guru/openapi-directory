import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorContext } from "./errorcontext";
import { ServiceContext } from "./servicecontext";



// ReportedErrorEvent
/** 
 * An error event which is reported to the Error Reporting system.
**/
export class ReportedErrorEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ErrorContext;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceContext" })
  serviceContext?: ServiceContext;
}
