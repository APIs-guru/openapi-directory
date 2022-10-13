package shared

type PrismaConfigPrismaTypeEnum string

const (
	PrismaConfigPrismaTypeEnumPrismaTypeUnspecified PrismaConfigPrismaTypeEnum = "PRISMA_TYPE_UNSPECIFIED"
	PrismaConfigPrismaTypeEnumPrismaTypeDisplay     PrismaConfigPrismaTypeEnum = "PRISMA_TYPE_DISPLAY"
	PrismaConfigPrismaTypeEnumPrismaTypeSearch      PrismaConfigPrismaTypeEnum = "PRISMA_TYPE_SEARCH"
	PrismaConfigPrismaTypeEnumPrismaTypeVideo       PrismaConfigPrismaTypeEnum = "PRISMA_TYPE_VIDEO"
	PrismaConfigPrismaTypeEnumPrismaTypeAudio       PrismaConfigPrismaTypeEnum = "PRISMA_TYPE_AUDIO"
	PrismaConfigPrismaTypeEnumPrismaTypeSocial      PrismaConfigPrismaTypeEnum = "PRISMA_TYPE_SOCIAL"
	PrismaConfigPrismaTypeEnumPrismaTypeFee         PrismaConfigPrismaTypeEnum = "PRISMA_TYPE_FEE"
)

type PrismaConfig struct {
	PrismaCpeCode *PrismaCpeCode              `json:"prismaCpeCode"`
	PrismaType    *PrismaConfigPrismaTypeEnum `json:"prismaType"`
	Supplier      *string                     `json:"supplier"`
}
