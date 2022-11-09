import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSetupV1CompaniesEmailTemplatesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  emailTemplateListViewModel?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
