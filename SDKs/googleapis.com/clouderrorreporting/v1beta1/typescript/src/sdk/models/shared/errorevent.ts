import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ErrorContext } from "./errorcontext";
import { ServiceContext } from "./servicecontext";



// ErrorEvent
/** 
 * An error event which is returned by the Error Reporting system.
**/
export class ErrorEvent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=context" })
  context?: ErrorContext;

  @SpeakeasyMetadata({ data: "json, name=eventTime" })
  eventTime?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceContext" })
  serviceContext?: ServiceContext;
}
