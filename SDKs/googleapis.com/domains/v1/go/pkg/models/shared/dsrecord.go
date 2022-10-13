package shared

type DsRecordAlgorithmEnum string

const (
	DsRecordAlgorithmEnumAlgorithmUnspecified DsRecordAlgorithmEnum = "ALGORITHM_UNSPECIFIED"
	DsRecordAlgorithmEnumRsamd5               DsRecordAlgorithmEnum = "RSAMD5"
	DsRecordAlgorithmEnumDh                   DsRecordAlgorithmEnum = "DH"
	DsRecordAlgorithmEnumDsa                  DsRecordAlgorithmEnum = "DSA"
	DsRecordAlgorithmEnumEcc                  DsRecordAlgorithmEnum = "ECC"
	DsRecordAlgorithmEnumRsasha1              DsRecordAlgorithmEnum = "RSASHA1"
	DsRecordAlgorithmEnumDsansec3Sha1         DsRecordAlgorithmEnum = "DSANSEC3SHA1"
	DsRecordAlgorithmEnumRsasha1Nsec3Sha1     DsRecordAlgorithmEnum = "RSASHA1NSEC3SHA1"
	DsRecordAlgorithmEnumRsasha256            DsRecordAlgorithmEnum = "RSASHA256"
	DsRecordAlgorithmEnumRsasha512            DsRecordAlgorithmEnum = "RSASHA512"
	DsRecordAlgorithmEnumEccgost              DsRecordAlgorithmEnum = "ECCGOST"
	DsRecordAlgorithmEnumEcdsap256Sha256      DsRecordAlgorithmEnum = "ECDSAP256SHA256"
	DsRecordAlgorithmEnumEcdsap384Sha384      DsRecordAlgorithmEnum = "ECDSAP384SHA384"
	DsRecordAlgorithmEnumEd25519              DsRecordAlgorithmEnum = "ED25519"
	DsRecordAlgorithmEnumEd448                DsRecordAlgorithmEnum = "ED448"
	DsRecordAlgorithmEnumIndirect             DsRecordAlgorithmEnum = "INDIRECT"
	DsRecordAlgorithmEnumPrivatedns           DsRecordAlgorithmEnum = "PRIVATEDNS"
	DsRecordAlgorithmEnumPrivateoid           DsRecordAlgorithmEnum = "PRIVATEOID"
)

type DsRecordDigestTypeEnum string

const (
	DsRecordDigestTypeEnumDigestTypeUnspecified DsRecordDigestTypeEnum = "DIGEST_TYPE_UNSPECIFIED"
	DsRecordDigestTypeEnumSha1                  DsRecordDigestTypeEnum = "SHA1"
	DsRecordDigestTypeEnumSha256                DsRecordDigestTypeEnum = "SHA256"
	DsRecordDigestTypeEnumGost3411              DsRecordDigestTypeEnum = "GOST3411"
	DsRecordDigestTypeEnumSha384                DsRecordDigestTypeEnum = "SHA384"
)

type DsRecord struct {
	Algorithm  *DsRecordAlgorithmEnum  `json:"algorithm"`
	Digest     *string                 `json:"digest"`
	DigestType *DsRecordDigestTypeEnum `json:"digestType"`
	KeyTag     *int32                  `json:"keyTag"`
}
