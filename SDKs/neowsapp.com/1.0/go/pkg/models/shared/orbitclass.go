package shared




type OrbitClassOrbitClassTypeEnum string

const (
    OrbitClassOrbitClassTypeEnumIeo OrbitClassOrbitClassTypeEnum = "IEO"
OrbitClassOrbitClassTypeEnumAte OrbitClassOrbitClassTypeEnum = "ATE"
OrbitClassOrbitClassTypeEnumApo OrbitClassOrbitClassTypeEnum = "APO"
OrbitClassOrbitClassTypeEnumAmo OrbitClassOrbitClassTypeEnum = "AMO"
OrbitClassOrbitClassTypeEnumMca OrbitClassOrbitClassTypeEnum = "MCA"
OrbitClassOrbitClassTypeEnumImb OrbitClassOrbitClassTypeEnum = "IMB"
OrbitClassOrbitClassTypeEnumMba OrbitClassOrbitClassTypeEnum = "MBA"
OrbitClassOrbitClassTypeEnumOmb OrbitClassOrbitClassTypeEnum = "OMB"
OrbitClassOrbitClassTypeEnumTjn OrbitClassOrbitClassTypeEnum = "TJN"
OrbitClassOrbitClassTypeEnumCen OrbitClassOrbitClassTypeEnum = "CEN"
OrbitClassOrbitClassTypeEnumTno OrbitClassOrbitClassTypeEnum = "TNO"
OrbitClassOrbitClassTypeEnumPaa OrbitClassOrbitClassTypeEnum = "PAA"
OrbitClassOrbitClassTypeEnumHya OrbitClassOrbitClassTypeEnum = "HYA"
OrbitClassOrbitClassTypeEnumHyp OrbitClassOrbitClassTypeEnum = "HYP"
OrbitClassOrbitClassTypeEnumPar OrbitClassOrbitClassTypeEnum = "PAR"
OrbitClassOrbitClassTypeEnumCom OrbitClassOrbitClassTypeEnum = "COM"
OrbitClassOrbitClassTypeEnumJfc OrbitClassOrbitClassTypeEnum = "JFC"
OrbitClassOrbitClassTypeEnumHtc OrbitClassOrbitClassTypeEnum = "HTC"
OrbitClassOrbitClassTypeEnumEtc OrbitClassOrbitClassTypeEnum = "ETC"
OrbitClassOrbitClassTypeEnumCtc OrbitClassOrbitClassTypeEnum = "CTC"
OrbitClassOrbitClassTypeEnumJFc OrbitClassOrbitClassTypeEnum = "JFc"
)


type OrbitClass struct {
    OrbitClassDescription *string `json:"orbit_class_description,omitempty"`
    OrbitClassRange *string `json:"orbit_class_range,omitempty"`
    OrbitClassType *OrbitClassOrbitClassTypeEnum `json:"orbit_class_type,omitempty"`
    
}

