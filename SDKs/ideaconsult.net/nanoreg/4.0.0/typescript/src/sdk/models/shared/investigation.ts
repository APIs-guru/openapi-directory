import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Investigation extends SpeakeasyBase {
  @Metadata({ data: "json, name=_childDocuments_" })
  childDocuments?: Map<string, any>;

  @Metadata({ data: "json, name=assay" })
  assay?: string;

  @Metadata({ data: "json, name=document_uuid" })
  documentUuid?: string;

  @Metadata({ data: "json, name=effectendpoint" })
  effectendpoint?: string;

  @Metadata({ data: "json, name=endpoint" })
  endpoint?: string;

  @Metadata({ data: "json, name=endpointcategory" })
  endpointcategory?: string;

  @Metadata({ data: "json, name=err" })
  err?: number;

  @Metadata({ data: "json, name=errQualifier" })
  errQualifier?: string;

  @Metadata({ data: "json, name=guidance" })
  guidance?: string;

  @Metadata({ data: "json, name=investigation" })
  investigation?: string;

  @Metadata({ data: "json, name=loQualifier" })
  loQualifier?: string;

  @Metadata({ data: "json, name=loValue" })
  loValue?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=owner_name" })
  ownerName?: string;

  @Metadata({ data: "json, name=publicname" })
  publicname?: string;

  @Metadata({ data: "json, name=reference" })
  reference?: string;

  @Metadata({ data: "json, name=reference_owner" })
  referenceOwner?: string;

  @Metadata({ data: "json, name=reference_year" })
  referenceYear?: string;

  @Metadata({ data: "json, name=resulttype" })
  resulttype?: string;

  @Metadata({ data: "json, name=s_uuid" })
  sUuid?: string;

  @Metadata({ data: "json, name=studyResultType" })
  studyResultType?: string;

  @Metadata({ data: "json, name=substanceType" })
  substanceType?: string;

  @Metadata({ data: "json, name=textValue" })
  textValue?: string;

  @Metadata({ data: "json, name=topcategory" })
  topcategory?: string;

  @Metadata({ data: "json, name=type_s" })
  typeS?: string;

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=upQualifier" })
  upQualifier?: string;

  @Metadata({ data: "json, name=upValue" })
  upValue?: number;

  @Metadata({ data: "json, name=updated" })
  updated?: string;
}
