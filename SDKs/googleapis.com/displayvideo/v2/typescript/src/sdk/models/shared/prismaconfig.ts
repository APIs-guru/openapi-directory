import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PrismaCpeCode } from "./prismacpecode";

export enum PrismaConfigPrismaTypeEnum {
    PrismaTypeUnspecified = "PRISMA_TYPE_UNSPECIFIED"
,    PrismaTypeDisplay = "PRISMA_TYPE_DISPLAY"
,    PrismaTypeSearch = "PRISMA_TYPE_SEARCH"
,    PrismaTypeVideo = "PRISMA_TYPE_VIDEO"
,    PrismaTypeAudio = "PRISMA_TYPE_AUDIO"
,    PrismaTypeSocial = "PRISMA_TYPE_SOCIAL"
,    PrismaTypeFee = "PRISMA_TYPE_FEE"
}


// PrismaConfig
/** 
 * Settings specific to the Mediaocean Prisma tool.
**/
export class PrismaConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=prismaCpeCode" })
  prismaCpeCode?: PrismaCpeCode;

  @Metadata({ data: "json, name=prismaType" })
  prismaType?: PrismaConfigPrismaTypeEnum;

  @Metadata({ data: "json, name=supplier" })
  supplier?: string;
}
