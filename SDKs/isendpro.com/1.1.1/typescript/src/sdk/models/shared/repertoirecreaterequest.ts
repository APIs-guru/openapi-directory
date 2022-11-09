import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RepertoirEcreaterequestRepertoireEditEnum {
    Create = "create"
}


export class RepertoirEcreaterequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=keyid" })
  keyid: string;

  @Metadata({ data: "json, name=repertoireEdit" })
  repertoireEdit: RepertoirEcreaterequestRepertoireEditEnum;

  @Metadata({ data: "json, name=repertoireNom" })
  repertoireNom: string;
}
