import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReturnPolicyPolicy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastReturnDate" })
  lastReturnDate?: string;

  @SpeakeasyMetadata({ data: "json, name=numberOfDays" })
  numberOfDays?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
