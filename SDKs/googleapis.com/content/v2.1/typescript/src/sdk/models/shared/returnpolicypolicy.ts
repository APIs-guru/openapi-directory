import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReturnPolicyPolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastReturnDate" })
  lastReturnDate?: string;

  @Metadata({ data: "json, name=numberOfDays" })
  numberOfDays?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
