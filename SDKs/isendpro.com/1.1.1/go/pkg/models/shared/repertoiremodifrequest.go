package shared

type RepertoirEmodifrequestRepertoireEditEnum string

const (
	RepertoirEmodifrequestRepertoireEditEnumAdd RepertoirEmodifrequestRepertoireEditEnum = "add"
	RepertoirEmodifrequestRepertoireEditEnumDel RepertoirEmodifrequestRepertoireEditEnum = "del"
)

type RepertoirEmodifrequest struct {
	Champ1         []string                                 `json:"champ1"`
	Champ10        []string                                 `json:"champ10"`
	Champ11        []string                                 `json:"champ11"`
	Champ12        []string                                 `json:"champ12"`
	Champ13        []string                                 `json:"champ13"`
	Champ14        []string                                 `json:"champ14"`
	Champ15        []string                                 `json:"champ15"`
	Champ16        []string                                 `json:"champ16"`
	Champ17        []string                                 `json:"champ17"`
	Champ18        []string                                 `json:"champ18"`
	Champ19        []string                                 `json:"champ19"`
	Champ2         []string                                 `json:"champ2"`
	Champ20        []string                                 `json:"champ20"`
	Champ21        []string                                 `json:"champ21"`
	Champ22        []string                                 `json:"champ22"`
	Champ23        []string                                 `json:"champ23"`
	Champ24        []string                                 `json:"champ24"`
	Champ25        []string                                 `json:"champ25"`
	Champ26        []string                                 `json:"champ26"`
	Champ27        []string                                 `json:"champ27"`
	Champ3         []string                                 `json:"champ3"`
	Champ4         []string                                 `json:"champ4"`
	Champ5         []string                                 `json:"champ5"`
	Champ6         []string                                 `json:"champ6"`
	Champ7         []string                                 `json:"champ7"`
	Champ8         []string                                 `json:"champ8"`
	Champ9         []string                                 `json:"champ9"`
	Keyid          string                                   `json:"keyid"`
	Num            []string                                 `json:"num"`
	RepertoireEdit RepertoirEmodifrequestRepertoireEditEnum `json:"repertoireEdit"`
	RepertoireID   string                                   `json:"repertoireId"`
}
