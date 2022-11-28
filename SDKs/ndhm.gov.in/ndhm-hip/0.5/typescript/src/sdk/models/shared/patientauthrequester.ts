import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PatientAuthRequesterTypeEnum {
    Hip = "HIP",
    Hiu = "HIU"
}


// PatientAuthRequester
/** 
 * identification of requester
**/
export class PatientAuthRequester extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: PatientAuthRequesterTypeEnum;
}
