import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PatientAuthRequesterTypeEnum {
    Hip = "HIP"
,    Hiu = "HIU"
}


// PatientAuthRequester
/** 
 * identification of requester
**/
export class PatientAuthRequester extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=type" })
  type: PatientAuthRequesterTypeEnum;
}
