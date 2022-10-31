package shared

type RepertoirEmodifrequestRepertoireEditEnum string

const (
	RepertoirEmodifrequestRepertoireEditEnumAdd RepertoirEmodifrequestRepertoireEditEnum = "add"
	RepertoirEmodifrequestRepertoireEditEnumDel RepertoirEmodifrequestRepertoireEditEnum = "del"
)

type RepertoirEmodifrequest struct {
	Champ1         []string                                 `json:"champ1,omitempty"`
	Champ10        []string                                 `json:"champ10,omitempty"`
	Champ11        []string                                 `json:"champ11,omitempty"`
	Champ12        []string                                 `json:"champ12,omitempty"`
	Champ13        []string                                 `json:"champ13,omitempty"`
	Champ14        []string                                 `json:"champ14,omitempty"`
	Champ15        []string                                 `json:"champ15,omitempty"`
	Champ16        []string                                 `json:"champ16,omitempty"`
	Champ17        []string                                 `json:"champ17,omitempty"`
	Champ18        []string                                 `json:"champ18,omitempty"`
	Champ19        []string                                 `json:"champ19,omitempty"`
	Champ2         []string                                 `json:"champ2,omitempty"`
	Champ20        []string                                 `json:"champ20,omitempty"`
	Champ21        []string                                 `json:"champ21,omitempty"`
	Champ22        []string                                 `json:"champ22,omitempty"`
	Champ23        []string                                 `json:"champ23,omitempty"`
	Champ24        []string                                 `json:"champ24,omitempty"`
	Champ25        []string                                 `json:"champ25,omitempty"`
	Champ26        []string                                 `json:"champ26,omitempty"`
	Champ27        []string                                 `json:"champ27,omitempty"`
	Champ3         []string                                 `json:"champ3,omitempty"`
	Champ4         []string                                 `json:"champ4,omitempty"`
	Champ5         []string                                 `json:"champ5,omitempty"`
	Champ6         []string                                 `json:"champ6,omitempty"`
	Champ7         []string                                 `json:"champ7,omitempty"`
	Champ8         []string                                 `json:"champ8,omitempty"`
	Champ9         []string                                 `json:"champ9,omitempty"`
	Keyid          string                                   `json:"keyid"`
	Num            []string                                 `json:"num"`
	RepertoireEdit RepertoirEmodifrequestRepertoireEditEnum `json:"repertoireEdit"`
	RepertoireID   string                                   `json:"repertoireId"`
}
